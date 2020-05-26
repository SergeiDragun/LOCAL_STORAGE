"use strict";

var dictionary = {
    drinks: {
        title: "напиток",
        ask: {
            name: {
                enterName: "Введите название напитка",
                cancelName: "Вы не ввели название напитка",
            },
            type: {
                firstType: "Если Ваш напиток алкогольный - нажмите 'Ок'",
                secondType: "Если Ваш напиток БЕЗалкогольный - нажмите 'Отмена'",
            },
            ingridients: {
                enterIngridients: "Напишите рецепт напитка!",
                wrongIngridients: "Вы не ввели рецепт напитка. Напиток не был добавлен в хранилище",
                cancelIngridients: "Вы нажали \"Отмена\", напиток не был добавлен в хранилище"
            }
        },

        get: {
            enterName: "Рецепт какого напитка Вы хотите узнать?",
            cancelName: "Вы не ввели название напитка",
            wrongName: "Такого напитка нет в хранилище, попробуйте еще раз",
            typeTrue: "Алкогольный: да",
            typeFalse: "Алкогольный: нет",
            ingridientsTrue: "Рецепт приготовления: ",
        },

        del: {
            enterName: "Какой напиток Вы хотите удалить из хранилища?",
            cancelName: "Вы не ввели название напитка",
            wrongName: "Такого напитка нет в хранилище, попробуйте еще раз",
            delTrue: "Напиток успешно удалён!"
        },

        getList: {
            listTrue: "Вот список всех напитков в хранилище:",
            listFalse: "В данный момент в хранилище нет напитков"
        }
    },
    dishes: {
        title: "блюдо",
        ask: {
            name: {
                enterName: "Введите название блюда",
                cancelName: "Вы не ввели название блюда",
            },
            type: {
                firstType: "Если Ваше блюдо вегетарианское - нажмите 'Ок'",
                secondType: "Если Ваше блюдо НЕ вегетарианское - нажмите 'Отмена'",
            },
            ingridients: {
                enterIngridients: "Напишите рецепт блюда!",
                wrongIngridients: "Вы не ввели рецепт блюда. Блюдо не было добавлено в хранилище",
                cancelIngridients: "Вы нажали \"Отмена\", блюдо не было добавлено в хранилище"
            }
        },

        get: {
            enterName: "Рецепт какого блюда Вы хотите узнать?",
            cancelName: "Вы не ввели название блюда",
            wrongName: "Такого блюда нет в хранилище, попробуйте еще раз",
            typeTrue: "Вегетарианское",
            typeFalse: "Не вегетарианское",
            ingridientsTrue: "Рецепт приготовления: ",
        },

        del: {
            enterName: "Какое блюдо Вы хотите удалить из хранилища?",
            cancelName: "Вы не ввели название блюда",
            wrongName: "Такого блюда нет в хранилище, попробуйте еще раз",
            delTrue: "Блюдо успешно удалено!"
        },

        getList: {
            listTrue: "Вот список всех блюд в хранилище:",
            listFalse: "В данный момент в хранилище нет блюд"
        }
    }
}