<template>
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
</template>

<script>
    export default {
        name: "Basic",
        data() {
            return{
                theme: 'light'
            }
        }
    }
</script>

<style scoped>
    .layout-nav{
        width: 420px;
        margin: 0 20px 0 auto;
    }
</style>
