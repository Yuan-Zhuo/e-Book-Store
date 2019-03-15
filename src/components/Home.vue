<template>
    <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="1-1" theme="light" width="auto" :open-names="['1','2']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="md-book"></Icon>
                        推荐
                    </template>
                    <MenuItem name="1-1">人气热卖</MenuItem>
                    <MenuItem name="1-2">新书上市</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="md-book"></Icon>
                        历史人文
                    </template>
                    <MenuItem name="2-1" to="/Browse">纪实文学</MenuItem>
                    <MenuItem name="2-2" to="/Browse">史传文学</MenuItem>
                    <MenuItem name="2-3" to="/Browse">奇幻文学</MenuItem>
                    <MenuItem name="2-4" to="/Browse">报道文学</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="md-book"></Icon>
                        科学技术
                    </template>
                    <MenuItem name="3-1">计算机科学</MenuItem>
                    <MenuItem name="3-2">建筑学</MenuItem>
                    <MenuItem name="3-3">生物医药</MenuItem>
                    <MenuItem name="3-4">农林畜牧</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="md-book"></Icon>
                        政治哲学
                    </template>
                    <MenuItem name="4-1">中国古典哲学</MenuItem>
                    <MenuItem name="4-2">西方古典哲学</MenuItem>
                    <MenuItem name="4-3">现代哲学</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
            <div class="search">
                <Input search enter-button placeholder="Enter something..." />
            </div>
            <Breadcrumb :style="{margin: '24px 0'}">
                <BreadcrumbItem>主页</BreadcrumbItem>
                <BreadcrumbItem>人气热卖</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <Row>
                    <Col span="6">
                        <Card :padding="0" shadow style="width: 300px;">
                            <CellGroup class="book">
                                <img src="../assets/logo.png" alt="">
                                <Cell title="他改变了中国" class="book-title"></Cell>
                                <Cell title="$20.12" extra="详细信息" to="/Detail"></Cell>
                                <Cell title="加入购物车" to="/"></Cell>
                            </CellGroup>
                            <CellGroup class="book">
                                <img src="../assets/logo.png" alt="">
                                <Cell title="他改变了中国" class="book-title"></Cell>
                                <Cell title="$20.12" extra="详细信息" to="/Detail"></Cell>
                                <Cell title="加入购物车" to="/"></Cell>
                            </CellGroup>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card :padding="0" shadow style="width: 300px;">
                            <CellGroup class="book">
                                <img src="../assets/logo.png" alt="">
                                <Cell title="他改变了中国" class="book-title"></Cell>
                                <Cell title="$20.12" extra="详细信息" to="/Detail"></Cell>
                                <Cell title="加入购物车" to="/"></Cell>
                            </CellGroup>
                            <CellGroup class="book">
                                <img src="../assets/logo.png" alt="">
                                <Cell title="他改变了中国" class="book-title"></Cell>
                                <Cell title="$20.12" extra="详细信息" to="/Detail"></Cell>
                                <Cell title="加入购物车" to="/"></Cell>
                            </CellGroup>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card :padding="0" shadow style="width: 300px;">
                            <CellGroup class="book">
                                <img src="../assets/logo.png" alt="">
                                <Cell title="他改变了中国" class="book-title"></Cell>
                                <Cell title="$20.12" extra="详细信息" to="/Detail"></Cell>
                                <Cell title="加入购物车" to="/"></Cell>
                            </CellGroup>
                            <CellGroup class="book">
                                <img src="../assets/logo.png" alt="">
                                <Cell title="他改变了中国" class="book-title"></Cell>
                                <Cell title="$20.12" extra="详细信息" to="/Detail"></Cell>
                                <Cell title="加入购物车" to="/"></Cell>
                            </CellGroup>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card :padding="0" shadow style="width: 300px;">
                            <CellGroup class="book">
                                <img src="../assets/logo.png" alt="">
                                <Cell title="他改变了中国" class="book-title"></Cell>
                                <Cell title="$20.12" extra="详细信息" to="/Detail"></Cell>
                                <Cell title="加入购物车" to="/"></Cell>
                            </CellGroup>
                            <CellGroup class="book">
                                <img src="../assets/logo.png" alt="">
                                <Cell title="他改变了中国" class="book-title"></Cell>
                                <Cell title="$20.12" extra="详细信息" to="/Detail"></Cell>
                                <Cell title="加入购物车" to="/"></Cell>
                            </CellGroup>
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Footer class="layout-footer-center book" :style="{padding: '16px', minHeight: '8px'}">2019 &copy; BookStore</Footer>
        </Layout>
    </Layout>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return{

            }
        }
    }
</script>

<style scoped>
    .book{
        text-align: center;
    }
    .book-title{
        color: transparent;
        -webkit-text-stroke: 1px black;
        letter-spacing: 0.01em;
    }
    .search{
        margin: 20px 400px 0;
    }
</style>
