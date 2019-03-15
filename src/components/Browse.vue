<template>
    <Layout>
        <div class="search">
            <Input search enter-button placeholder="Enter something..." />
        </div>
        <Breadcrumb :style="{margin: '24px 350px'}">
            <BreadcrumbItem>搜索</BreadcrumbItem>
            <BreadcrumbItem>历史人文</BreadcrumbItem>
            <BreadcrumbItem>纪实文学</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{margin: '0px 250px 0', background: '#fff', minHeight: '500px'}">
            <Card :bordered="false">
                <Row>
                    <Col span="6" offset="1">
                        <img src="../assets/logo.png" alt="">
                    </Col>
                    <Col span="17" class="book-info">
                        <Cell  to="/Detail">
                            <br>
                            <h1>他改变了中国</h1>
                            <br>
                            <p>江泽民传 库恩著人物传记政治人物中国第三代领导人认识 当代中国 政治历史领袖人物传记</p>
                            <br>
                            <p><em>$20.12</em></p>
                            <br>
                        </Cell>
                    </Col>
                </Row>
            </Card>
            <Card :bordered="false">
                <Row>
                    <Col span="6" offset="1">
                        <img src="../assets/logo.png" alt="">
                    </Col>
                    <Col span="17" class="book-info">
                        <Cell  to="/Detail">
                            <br>
                            <h1>他改变了中国</h1>
                            <br>
                            <p>江泽民传 库恩著人物传记政治人物中国第三代领导人认识 当代中国 政治历史领袖人物传记</p>
                            <br>
                            <p><em>$20.12</em></p>
                            <br>
                        </Cell>
                    </Col>
                </Row>
            </Card>
            <Card :bordered="false">
                <Row>
                    <Col span="6" offset="1">
                        <img src="../assets/logo.png" alt="">
                    </Col>
                    <Col span="17" class="book-info">
                        <Cell  to="/Detail">
                            <br>
                            <h1>他改变了中国</h1>
                            <br>
                            <p>江泽民传 库恩著人物传记政治人物中国第三代领导人认识 当代中国 政治历史领袖人物传记</p>
                            <br>
                            <p><em>$20.12</em></p>
                            <br>
                        </Cell>
                    </Col>
                </Row>
            </Card>
        </Content>
        <Footer class="layout-footer-center">2019 &copy; BookStore</Footer>
    </Layout>
</template>

<script>
    export default {
        name: "Browse"
    }
</script>

<style scoped>
    .layout-footer-center{
        text-align: center;
    }
    .book-info{
        margin: 30px 0 0;
    }
    .search{
        margin: 20px 500px 0;
    }
    img{
        height:100%;
        width: 100%;
    }
</style>
