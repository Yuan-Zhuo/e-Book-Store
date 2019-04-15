<template>
    <div id="app" class="layout">
        <router-view
                v-bind:books="books"
                v-bind:cur_book="cur_book"
                v-bind:book_list="book_list"
                @curBook="curBook"
                @addBook="addBook"
                @checked="checked"
                @modifyList="modifyList"
        ></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                cur_book: {},
                book_list: [],
                books: [
                    [
                        // 历史人文
                        {book_name: "资治通鉴", author_name: "司马光", price: 58, class: 0},
                        {book_name: "战国策", author_name: "刘向", price: 29, class: 0},
                        {book_name: "老子", author_name: "老子", price: 43, class: 0},
                        {book_name: "苏轼文集", author_name: "苏轼", price: 24, class: 0},
                        {book_name: "世说新语", author_name: "刘义庆", price: 67, class: 0},
                        {book_name: "三国志", author_name: "陈寿", price: 32, class: 0},
                        {book_name: "后汉书", author_name: "班固", price: 172, class: 0},
                    ],
                    [
                        // 科学技术
                        {book_name: "贝聿铭全集", author_name: "贝聿铭", price: 24, class: 1},
                        {book_name: "Vue.js实战", author_name: "梁灏", price: 61, class: 1},
                        {book_name: "农业经济学", author_name: "赵维清", price: 33, class: 1},
                        {book_name: "算法导论", author_name: "科尔曼", price: 91, class: 1},
                        {book_name: "外科学", author_name: "黄家驷", price: 42, class: 1},
                        {book_name: "建筑设计基础", author_name: "周圆圆", price: 16, class: 1},
                        {book_name: "达尔文进化论", author_name: "达尔文", price: 57, class: 1},
                    ],
                    [
                        // 政治哲学
                        {book_name: "北大哲学课", author_name: "北大哲学系", price: 121, class: 2},
                        {book_name: "西方哲学史", author_name: "罗素", price: 132, class: 2},
                        {book_name: "中国哲学史", author_name: "冯友兰", price: 49, class: 2},
                        {book_name: "人生的智慧", author_name: "叔本华", price: 39, class: 2},
                        {book_name: "社会契约论", author_name: "卢梭", price: 75, class: 2},
                        {book_name: "沉思录", author_name: "奥勒留", price: 93, class: 2},
                        {book_name: "哲学简史", author_name: "约翰逊", price: 67, class: 2},
                    ]
                ],
            }
        },
        methods: {
            curBook: function (book) {
                this.cur_book = book;
            },
            addBook: function (flag) {
                if (flag)
                    this.book_list.push(this.cur_book);
            },
            checked: function (flag) {
                if (flag)
                    this.book_list = [];
            },
            modifyList: function (index) {
                this.book_list.splice(index, 1);
            }
        }
    }
</script>

<style>
    .layout {
        border: 0 solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
        width: 100%;
    }
</style>
