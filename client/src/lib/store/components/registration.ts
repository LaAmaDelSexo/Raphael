import {create} from 'zustand'

export type ContentOptions = 'REQUIREMENTS' | 'APPLICATIONS' | 'TUITIONS' | 'INSTRUCTIONS' | 'TESTIMONIES' |'ADMISIONTEAM';

interface RegistrationManager {
  content: ContentOptions | null;
  changeContentState: (newContent: string) => void;

}

export const useRegistrationManager = create<RegistrationManager>((set) => ({
  content: null,
  changeContentState: (newContent) => set({
    content: newContent as RegistrationManager['content']
  })
}))