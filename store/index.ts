import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeObservable, observable, action } from "mobx";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface StoreState {
    todos: Todo[];
    archivedTodos: Todo[];
    user: null | string;
    loggedIn: boolean;
}

const initialStoreState: StoreState = {
    todos: [],
    archivedTodos: [],
    user: null,
    loggedIn: false,
};

class YukiStore {
    store: StoreState = initialStoreState;

    constructor() {
        makeObservable(this, {
            store: observable,
            addTodos: action,
            resetStore: action,
        });
    }

    addTodos(todo: Todo) {
        this.store.todos.push(todo);
    }

    resetStore() {
        this.store = initialStoreState;
    }
}

export const yukiStore = new YukiStore();
