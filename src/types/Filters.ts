import {Ref} from 'vue'

enum Filters {
    AllProducts = 'All Products',
    AvailableProducts = 'Available Products',
    WatchProducts = 'Watch Products'
}

export type FilterInject = {
    filter: Ref<Filters>,
    changeFilter: (filter: Filters) => void
}

export default Filters