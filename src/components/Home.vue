<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-cart-outline"></Icon>
                            购物车
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="md-log-out"></Icon>
                            个人信息
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-settings-outline"></Icon>
                            设置
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
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
                            <MenuItem name="2-1">史传文学</MenuItem>
                            <MenuItem name="2-2">纪实文学</MenuItem>
                            <MenuItem name="2-3">奇幻文学</MenuItem>
                            <MenuItem name="2-4">报道文学</MenuItem>
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
                                        <Cell title="$20.12" extra="详细信息" to="/components/button"></Cell>
                                        <Cell title="加入购物车" to="/components/button"></Cell>
                                    </CellGroup>
                                    <CellGroup class="book">
                                        <img src="../assets/logo.png" alt="">
                                        <Cell title="他改变了中国" class="book-title"></Cell>
                                        <Cell title="$20.12" extra="详细信息" to="/components/button"></Cell>
                                        <Cell title="加入购物车" to="/components/button"></Cell>
                                    </CellGroup>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card :padding="0" shadow style="width: 300px;">
                                    <CellGroup class="book">
                                        <img src="../assets/logo.png" alt="">
                                        <Cell title="他改变了中国" class="book-title"></Cell>
                                        <Cell title="$20.12" extra="详细信息" to="/components/button"></Cell>
                                        <Cell title="加入购物车" to="/components/button"></Cell>
                                    </CellGroup>
                                    <CellGroup class="book">
                                        <img src="../assets/logo.png" alt="">
                                        <Cell title="他改变了中国" class="book-title"></Cell>
                                        <Cell title="$20.12" extra="详细信息" to="/components/button"></Cell>
                                        <Cell title="加入购物车" to="/components/button"></Cell>
                                    </CellGroup>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card :padding="0" shadow style="width: 300px;">
                                    <CellGroup class="book">
                                        <img src="../assets/logo.png" alt="">
                                        <Cell title="他改变了中国" class="book-title"></Cell>
                                        <Cell title="$20.12" extra="详细信息" to="/components/button"></Cell>
                                        <Cell title="加入购物车" to="/components/button"></Cell>
                                    </CellGroup>
                                    <CellGroup class="book">
                                        <img src="../assets/logo.png" alt="">
                                        <Cell title="他改变了中国" class="book-title"></Cell>
                                        <Cell title="$20.12" extra="详细信息" to="/components/button"></Cell>
                                        <Cell title="加入购物车" to="/components/button"></Cell>
                                    </CellGroup>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card :padding="0" shadow style="width: 300px;">
                                    <CellGroup class="book">
                                        <img src="../assets/logo.png" alt="">
                                        <Cell title="他改变了中国" class="book-title"></Cell>
                                        <Cell title="$20.12" extra="详细信息" to="/components/button"></Cell>
                                        <Cell title="加入购物车" to="/components/button"></Cell>
                                    </CellGroup>
                                    <CellGroup class="book">
                                        <img src="../assets/logo.png" alt="">
                                        <Cell title="他改变了中国" class="book-title"></Cell>
                                        <Cell title="$20.12" extra="详细信息" to="/components/button"></Cell>
                                        <Cell title="加入购物车" to="/components/button"></Cell>
                                    </CellGroup>
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return{
                theme: 'light'
            }
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 0px;
        overflow: hidden;
    }
    .layout-nav{
        width: 420px;
        margin: 0 20px 0 auto;
    }
    .book{
        text-align: center;
    }
    .book-title{
        color: transparent;
        -webkit-text-stroke: 1px black;
        letter-spacing: 0.01em;
    }
</style>
