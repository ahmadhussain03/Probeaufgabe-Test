import { inject } from 'vue'
import { FilterInject } from '@/types/Filters';
import key from "@/constants/filter"

function useFilter() {
    return inject<FilterInject>(key)!
}

export default useFilter