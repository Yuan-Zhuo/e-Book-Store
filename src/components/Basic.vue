<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-home"></Icon>
                    <em @click="handleHome">主页</em>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-cart-outline"></Icon>
                    <em @click="handleCart">购物车</em>
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="md-search"></Icon>
                    <em @click="handleSearch">搜索</em>
                </MenuItem>
                <MenuItem name="5">
                    <Icon type="md-log-out"></Icon>
                    <em @click="handleLogout">退出登录</em>
                    <Modal
                            v-model="show_logout"
                            title="确定要退出吗？"
                            @on-ok="logout_ok"
                            @on-cancel="logout_cancel">
                        <p>系统将会保留您的信息,您可以在下次登录后继续操作。</p>
                    </Modal>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
    export default {
        name: "Basic",
        data() {
            return {
                theme: 'light',
                show_info: false,
                show_logout: false
            }
        },
        methods: {
            handleLogout() {
                this.show_logout = !this.show_logout;
            },
            logout_ok() {
                this.$Message.info('退出成功');
                this.$router.replace({path: '/'});
            },
            logout_cancel() {
                this.$Message.info('退出取消');
            },
            handleCart() {
                this.$Message.info('已切换到购物车');
                this.$router.push({path: '/Cart'});
            },
            handleHome() {
                this.$Message.info('已切换到主页');
                this.$router.push({path: '/Home'});
            },
            handleSearch() {
                this.$Message.info('已切换到浏览页');
                this.$router.push({path: '/Browse'});
            }
        }
    }
</script>

<style scoped>
    .layout-nav {
        width: 500px;
        margin: 0 20px 0 auto;
    }
</style>
