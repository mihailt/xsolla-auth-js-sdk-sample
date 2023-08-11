import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface XsollaUser {
  email?: string
}

interface XsollaStore {
  loading: boolean,
  token?: string
  user?: XsollaUser
}

interface XsollaActions {
  setLoading: (loading: boolean) => void
  setToken: (token?: string) => void
  fetchUser: () => void
  signout: () => void
}

export const useXsollaAuthStore = create<XsollaStore & XsollaActions>()(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        token: undefined,
        user: undefined,
        setLoading: (loading: boolean) => set((state) => ({ loading })),
        setToken: (token?: string) => set((state) => ({ token })),
        fetchUser: async () => {
          const token =  get().token

          set((state) => ({ loading: true }))

          try {
            const resp = await fetch(
              `https://login.xsolla.com/api/users/me`,
              {
                method: 'GET',
                headers: {
                  Authorization: token!
                }
              }
            );
            
            const user = await resp.json();
            set((state) => ({ user, loading: false }))
          } catch (e) {
            console.log(e)
            set((state) => ({ loading: false }))
          }
        },
        signout: () => {
          set((state) => ({ user: undefined, token: undefined }))
        }
      }),
      {
        name: 'xsolla-storage',
      }
    )
  )
)
