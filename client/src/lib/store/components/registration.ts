import {create} from 'zustand'
import Registration from '../../../common/components/registration/Registration';

export type ContentOptions = 'REQUIREMENTS' | 'APLICATIONS' | 'TUITIONS' | 'INSTRUCTIONS' | 'TESTIMONIES' |'ADMISIONTEAM';

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