<template>
    <layout>
        <basic></basic>
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <Menu active-name="1-1" theme="light" width="auto" :open-names="['1','2']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="md-book"></Icon>
                            推荐
                        </template>
                        <MenuItem name="1-1"><p @click="switchPage(4)">人气热卖</p></MenuItem>
                        <MenuItem name="1-2"><p @click="switchPage(5)">新书上市</p></MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="md-book"></Icon>
                            分类
                        </template>
                        <MenuItem name="2-1"><p @click="switchPage(0)">历史人文</p></MenuItem>
                        <MenuItem name="2-2"><p @click="switchPage(1)">科学技术</p></MenuItem>
                        <MenuItem name="2-3"><p @click="switchPage(2)">政治哲学</p></MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{padding: '0 24px 24px'}">
                <Breadcrumb :style="{margin: '24px 0'}">
                    <BreadcrumbItem>主页</BreadcrumbItem>
                    <BreadcrumbItem v-if="show(4)">人气热卖</BreadcrumbItem>
                    <BreadcrumbItem v-if="show(5)">新书上市</BreadcrumbItem>
                    <BreadcrumbItem v-if="show(0)">历史人文</BreadcrumbItem>
                    <BreadcrumbItem v-if="show(1)">科学技术</BreadcrumbItem>
                    <BreadcrumbItem v-if="show(2)">政治哲学</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <Row>
                        <Col v-for="(book,index) in show_list" span="6">
                            <Card :padding="0" shadow style="width: 300px;">
                                <CellGroup class="book">
                                    <img v-bind:src=generatePath(book) alt="">
                                    <Cell>
                                        <h1 v-on:click="switchColor(index)"
                                            v-bind:class="{titleColor:cards[index].isRed}">
                                            {{book.book_name}}</h1>
                                    </Cell>
                                    <Cell>
                                        <p @click="switchBook(book)">{{generatePrice(book.price)}}</p>
                                    </Cell>
                                    <Cell>
                                        <p @click="addBook(book)">加入购物车</p>
                                    </Cell>
                                </CellGroup>
                            </Card>
                        </Col>
                    </Row>
                </Content>
                <Footer class="layout-footer-center book" :style="{padding: '16px', minHeight: '8px'}">2019 &copy;
                    BookStore
                </Footer>
            </Layout>
        </Layout>
    </layout>

</template>

<script>
    export default {
        name: "Home",
        props: ['books', 'user'],
        data() {
            return {
                show_index: 4,
                pre_list: [
                    [
                        this.books[0][1], this.books[0][3],
                        this.books[1][2], this.books[1][4],
                        this.books[2][3], this.books[2][5],
                        this.books[2][4], this.books[0][5],
                    ],
                    [
                        this.books[1][1], this.books[1][3],
                        this.books[2][0], this.books[0][4],
                        this.books[2][2], this.books[1][2],
                        this.books[1][5], this.books[1][0],
                    ]
                ],
                show_list: [
                    this.books[0][1], this.books[0][3],
                    this.books[1][2], this.books[1][4],
                    this.books[2][3], this.books[2][5],
                    this.books[2][4], this.books[0][5],
                ],
                cards: [
                    {isRed: false}, {isRed: false},
                    {isRed: false}, {isRed: false},
                    {isRed: false}, {isRed: false},
                    {isRed: false}, {isRed: false},
                ],
            }
        },
        methods: {
            show: function (idx) {
                return (this.show_index === idx);
            },
            switchPage: function (idx) {
                this.show_index = idx;
                for (let j = 0; j < 8; j++) {
                    this.cards[j].isRed = false;
                }
                if (idx < 4) {
                    this.show_list = this.books[idx];
                } else {
                    this.show_list = this.pre_list[idx - 4];
                }
            },
            switchColor: function (index) {
                (this.cards[index]).isRed = !(this.cards[index]).isRed;
            },
            generatePrice(str) {
                return "价格: " + str + "元";
            },
            switchBook(book) {
                this.$emit('curBook', book);
                this.$router.push({path: '/Detail'});
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
            addBook(book) {
                this.$emit('curBook', book);
                this.$Message.info('已添加到购物车');
                this.$emit('addBook', true);
            }
        }
    }
</script>

<style scoped>
    .book {
        text-align: center;
    }
    .titleColor {
        color: red;
    }
</style>
