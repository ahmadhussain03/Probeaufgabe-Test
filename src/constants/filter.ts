import { FilterInject } from '@/types/Filters'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<FilterInject>

export default key