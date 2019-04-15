<template>
    <layout>
        <basic></basic>
        <Layout>
            <Breadcrumb :style="{margin: '24px 350px'}">
                <BreadcrumbItem>主页</BreadcrumbItem>
                <BreadcrumbItem>购物车</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{margin: '0px 250px 0', background: '#fff', minHeight: '500px'}">
                <Table stripe border :columns="cols" :data="book_dict"></Table>
                <ButtonGroup class="select">
                    <Button size="large" type="test">
                        <Icon type="logo-usd"></Icon>
                        总计: {{total}} 元
                    </Button>
                    <Button size="large" type="error" @click="handleOrder">
                        <Icon type="md-card"></Icon>
                        立即下单
                    </Button>
                    <Modal
                            v-model="show_order"
                            title="确定下单吗？"
                            @on-ok="order_ok"
                            @on-cancel="order_cancel">
                        <p>共消费： {{total}} 元</p>
                    </Modal>
                </ButtonGroup>

            </Content>
            <Footer class="layout-footer-center">2019 &copy; BookStore</Footer>
        </Layout>
    </layout>
</template>
<script>
    export default {
        name: "Cart",
        props: ['books', 'book_list'],
        data() {
            return {
                show_order: false,
                cols: [
                    {
                        title: '书名',
                        key: 'book_name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {props: {type: 'person'}}),
                                h('strong', params.row.book_name)
                            ]);
                        }
                    },
                    {title: '作者', key: 'author_name'},
                    {title: '价格', key: 'price',sortable: true},
                    {
                        title: '操作', key: 'action', width: 150, align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {type: 'primary', size: 'small'},
                                    style: {marginRight: '5px'},
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {type: 'error', size: 'small'},
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
            }
        },
        computed: {
            book_dict: function () {
                return this.book_list;
            },
            total: function () {
                let total = 0;
                for (let i = 0; i < this.book_list.length; ++i)
                    total += this.book_list[i].price;
                return total;
            }
        },
        methods: {
            order_ok() {
                this.$emit('checked', true);
                this.$Message.info('下单成功');
            },
            order_cancel() {
                this.$Message.info('下单取消');
            },
            handleOrder() {
                this.show_order = !this.show_order;
            },

            show(index) {
                this.$Modal.info({
                    title: '详细信息',
                    content: `书名：${this.book_dict[index].book_name}<br>作者：${this.book_dict[index].author_name}<br>价格：${this.book_dict[index].price}元`
                })
            },
            remove(index) {
                this.$emit('modifyList', index);
            }
        }
    }
</script>

<style scoped>
    .layout-footer-center {
        text-align: center;
    }
    p {
        text-align: left;
        text-indent: 2em;
        letter-spacing: 0.5px;
    }
    .select {
        margin: 20px 20px 20px 650px;
    }
</style>
