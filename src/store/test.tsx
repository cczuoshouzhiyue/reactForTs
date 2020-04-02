import { observable, action } from 'mobx'

interface Interface {
    currentMenu: 'index'
}

const menuStore = observable({
    currentMenu: 'index',
    setCurrentMenu (name :string): void {
        this.currentMenu = name
    }
});
export default menuStore
