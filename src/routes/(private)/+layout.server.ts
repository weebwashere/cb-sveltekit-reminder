import { redirect } from '@sveltejs/kit'

export const load = ({locals}) => {
  const {user} = locals
  if (!user) {
    throw redirect(302, '/login')
  }
}