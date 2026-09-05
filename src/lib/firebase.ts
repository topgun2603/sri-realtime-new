import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';

// Guarded so this module can also be imported outside a Vite build.
const env = import.meta.env ?? ({} as ImportMetaEnv);

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

/**
 * Whether real credentials are present. Without them we never load the SDK —
 * callers fall back to email, so the site still works on a fresh checkout.
 */
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId,
);

/*
 * The Firebase SDK is ~400 kB of the bundle and only two things need it: the
 * contact form on submit, and analytics after first paint. Everything below is
 * dynamically imported so neither cost lands on the initial page load.
 */

let appPromise: Promise<FirebaseApp> | null = null;

function loadApp(): Promise<FirebaseApp> | null {
  if (!isFirebaseConfigured) return null;

  if (!appPromise) {
    appPromise = import('firebase/app').then(({ initializeApp, getApps, getApp }) =>
      getApps().length > 0 ? getApp() : initializeApp(firebaseConfig),
    );
  }

  return appPromise;
}

/** Resolves the Firestore instance, or null when Firebase isn't configured. */
export async function getDb(): Promise<Firestore | null> {
  const pending = loadApp();
  if (!pending) return null;

  const app = await pending;
  const { getFirestore } = await import('firebase/firestore');
  return getFirestore(app);
}

/** Fire-and-forget analytics. Never allowed to break the page. */
export async function initAnalytics(): Promise<void> {
  const pending = loadApp();
  if (!pending) return;

  try {
    const app = await pending;
    const { getAnalytics, isSupported } = await import('firebase/analytics');
    if (await isSupported()) getAnalytics(app);
  } catch {
    /* blocked by an extension, unsupported browser, or offline — ignore */
  }
}
