import {create} from 'zustand';
//import { NIL, v4 as uuidv4 } from 'uuid';
import { NIL as NIL_UUID } from 'uuid';


export type UserRole = 'guest' | 'student' | 'admin' | 'owner'; 

interface User {
//Identity
  id: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  alias: string | null;
  avatarURL: string | null;
  preference : {
    theme: 'light' | 'dark' | 'system';
    locale: 'es' | 'en';
  };
};

interface UserState {
  profile: User | null;
  isAuthenticated: boolean;
  role : 'GUEST' | 'STUDENT' | 'TEACHER' | 'ADMIN' | 'OWNER' | null;
  permisions: string[];
  isExpired?: boolean
  isLoading?: boolean
  login: (userData: User, role: string, permision: string[]) => void;
  logout: () => void;
  checkAuth: () => Promise<void>
}



export const useUser = create<UserState>((set) => ({
  profile: null,
  isAuthenticated: false,
  role: null,
  permisions: [],
  isExpired: false,
  isLoading: false,
  login: (profile, role, permisions) =>
    set({
      profile,
      role: role as UserState['role'],
      permisions,
      isAuthenticated: true    
    }),
    logout: () => 
      set({
        profile: null,
        role: null,
        permisions: [],
        isAuthenticated: false
      }),
    checkAuth: async () => {
      set(({isLoading:true}))
// CALL TO BACKEND IT DOES NOT EXIST YET. Logic: if good then update state if not prop logout protocol.
      set(({isLoading:false}))
    }
}));