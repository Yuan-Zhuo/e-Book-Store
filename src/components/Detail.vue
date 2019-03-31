<template>
    <layout>
        <basic></basic>
        <Layout>
            <div class="search">
                <Input search enter-button placeholder="Enter something..."></Input>
            </div>
            <Breadcrumb :style="{margin: '24px 350px'}">
                <BreadcrumbItem>主页</BreadcrumbItem>
                <BreadcrumbItem>{{generateClass()}}</BreadcrumbItem>
                <BreadcrumbItem>{{cur_book.book_name}}</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{margin: '0px 250px 0', background: '#fff', minHeight: '500px'}">
                <Row>
                    <div class="space"></div>
                    <Col span="6" offset="2">
                        <img v-bind:src=generatePath() alt="">
                    </Col>
                    <Col span="13" offset="1">
                        <div class="space"></div>
                        <h1 style="font-size:30px;">{{cur_book.book_name}}</h1>
                        <br>
                        <h4>{{cur_book.author_name}}</h4>
                        <div class="space"></div>
                        <Button type="error" @click="addBook">加入购物车</Button>
                    </Col>
                </Row>
                <div class="details">
                    <Divider orientation="left">内容简介</Divider>
                    <p>《他改变了中国：江泽民传》这本传记介绍了江泽民同志的人生历程，尤其是阐述和评价了江泽民同志担任中国主要领导人的10多年中创立的历史功绩。
                        在着重于国事活动的同时，也广泛涉及家庭生活、业余爱好、人品风格等方方面面，多角度、多侧面地展现了传主的风采。</p>
                    <p>
                        作者对中国的国情、中国的历史、中国的传统文化都有相当的解，从本书中可以体会到作者对中国情有友好感情。作为一位西方人士，作者对某些问题的观点和提法同我们有一定差距，相信读者是会理解和把握的。
                    </p>
                    <Divider orientation="left">作者简介</Divider>
                    <p>罗伯特·劳伦斯·库恩博士，著名的国际投资银行家和公司战略家。他还是作家、编辑、学者、科学家、私人投资家和慈善家。
                        库恩博士任花旗集团公司执行董事，专职负责并购、公司重组、财务战略和资本运作。
                    </p>
                    <Divider orientation="left">精彩书评</Divider>
                    <p>
                        《江泽民传》是罗伯特·劳伦斯·库恩对江泽民精心研究之力作。书中生动地刻画了在一个特殊的变革时期领导世界上人口最多的国家的最高领导人的形象。所有有兴趣更好地理解中国未来发展动力的人，都会从书中受益匪浅。
                    </p>
                    <p class="comment">——美国前国务卿亨利·基辛格</p>
                    <br>
                    <p>
                        本书从崭新而独特的视角展现了中国第三代领导人的成就。通过一手资料，详尽描述了江泽民令人回味的人生历程，对于那些渴望理解现代中国领导层的各个方面的人来说，本书将是珍贵的文献。
                    </p>
                    <p class="comment">——美国参议员范士丹</p>
                    <br>
                </div>
            </Content>
            <Footer class="layout-footer-center">2019 &copy; BookStore</Footer>
        </Layout>
    </layout>
</template>

<script>
    export default {
        name: "Detail",
        props: ['cur_book'],
        methods: {
            generatePath() {
                let book = this.cur_book;
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
            generateClass() {
                let str = '';
                switch (this.cur_book.class) {
                    case 0:
                        str = "历史人文";
                        break;
                    case 1:
                        str = "科学技术";
                        break;
                    case 2:
                        str = "政治哲学";
                        break;
                }
                return str;
            },
            addBook() {
                this.$Message.info('已添加到购物车');
                this.$emit('addBook', true);
            }
        }
    }
</script>

<style scoped>
    .layout-footer-center {
        text-align: center;
    }

    img {
        height: 120%;
        width: 120%;
    }

    p {
        text-align: left;
        text-indent: 2em;
        letter-spacing: 0.5px;
    }

    .details {
        margin: 30px 120px 0;
    }

    .space {
        margin: 30px 0 0;
    }

    .comment {
        text-indent: 40em;
    }

    .search {
        margin: 20px 500px 0;
    }
</style>
