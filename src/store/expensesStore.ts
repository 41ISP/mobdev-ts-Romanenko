import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useExpenses = create()(
    persist((set)=> ({}), {name: 'expenses'})

)