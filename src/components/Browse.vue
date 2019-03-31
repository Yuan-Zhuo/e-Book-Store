<template>
    <layout>
        <basic></basic>
        <Layout>
            <div class="search">
                <Input v-model="input" search enter-button placeholder="输入你想要找的书"></Input>
            </div>
            <Row>
                <Col span="18">
                    <Breadcrumb :style="{margin: '24px 350px'}">
                        <BreadcrumbItem>主页</BreadcrumbItem>
                        <BreadcrumbItem>搜索</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col span="6">
                    <br>
                    <br>
                    <i-switch size="large" @on-change="change">
                        <span slot="open">完成</span>
                        <span slot="close">开启</span>
                    </i-switch>
                </Col>
            </Row>

            <Content :style="{margin: '0px 300px 0', background: '#fff', minHeight: '100px'}"
                     v-if="book_list.length > 0">

                <Card :bordered="false" v-for="(book,index) in book_list">
                    <Row>
                        <Col span="6" offset="2">
                            <img v-bind:src=generatePath(book) alt="">
                        </Col>
                        <Col span="16" class="book-info">
                            <h2>{{book.book_name}}</h2>

                            <Button @click="switchBook(book)" type="text">
                                <p><em>{{generateAuthor(book.author_name)}}</em></p>
                                <p><em>{{generatePrice(book.price)}}</em></p>
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2019 &copy; BookStore</Footer>
        </Layout>
    </layout>
</template>

<script>
    export default {
        name: "Browse",
        props: ['books'],

        data() {
            return {
                isOpen: false,
                input: '',
                initFlag: false,
                book_dict: [],
            }
        },
        methods: {
            generatePrice(str) {
                return "价格: " + str + "元";
            },
            generateAuthor(str) {
                return "作者：" + str;
            },
            generatePath(book) {
                let dir = "";
                switch (book.class) {
                    case 0:
                        dir = "历史人文";
                        break;
                    case 1:
                        dir = "科学技术";
                        break;
                    case 2:
                        dir = "政治哲学";
                        break;
                }
                return require("../assets/".concat(dir).concat("/").concat(book.book_name).concat(".jpg"));
            },
            switchBook(book) {
                this.$emit('curBook', book);
                this.$router.push({path: '/Detail'});
            },
            change() {
                this.isOpen = !this.isOpen;
            }
        },
        computed: {
            book_list: function () {
                if (!this.initFlag) {
                    for (let j = 0; j < this.books.length; ++j) {
                        for (let i = 0; i < 7; ++i) {
                            let book = this.books[j][i];
                            this.$set(book, 'isRed', false);
                            this.book_dict.push(book);
                        }
                    }

                    this.initFlag = true;
                }

                let cur_list = this.book_dict;
                let input = this.input;

                if (input) {
                    cur_list = cur_list.filter(function (book) {
                        return Object.keys(book).some(function (key) {
                            return String(book[key]).toLowerCase().indexOf(input) > -1
                        })
                    })
                }

                if (this.isOpen) {
                    cur_list = cur_list.sort(function (book_x, book_y) {
                        return book_x.book_name.localeCompare(book_y.book_name);
                    })
                } else {
                    cur_list = cur_list.sort(function (book_x, book_y) {
                        return book_x.price - book_y.price;
                    })
                }

                return cur_list;
            }
        }
    }
</script>

<style scoped>
    .layout-footer-center {
        text-align: center;
    }

    .book-info {
        margin: 10px 0 0;
    }

    .search {
        margin: 20px 500px 0;
    }

    img {
        height: 40%;
        width: 40%;
    }
</style>
