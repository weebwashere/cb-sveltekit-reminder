import { PROD } from "$env/static/private";
import {cb} from "$lib/server/auth"
import type { Handle } from "@sveltejs/kit";

const auth: Handle = (async ({ event, resolve }) => {
  const token = event.cookies.get('session');
  if (token) {
    try {
      const user = await cb.getUserInfo(token);
      if (!user || !user.id || user.id == '') {
        event.cookies.set('session', '', {
          path: '/',
          expires: new Date(0),
          sameSite: PROD === 'true' ? 'none' : 'lax',
          secure: PROD === 'true'
        });
        // automatic logout if data is corrupted
        return resolve(event);
      }
      event.locals.user = user;
    } catch {
      event.cookies.delete('session', { path: '/' });
    }
  }
  // user passed only if token was valid and got data
  return resolve(event);
});

export const handle = auth;