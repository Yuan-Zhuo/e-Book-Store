<template>
    <div class="Sign">
        <div class="Region">
            <Card :bordered="false">
                <p slot="title" class="title">注册/登录</p>
                <div class="input">
                    <Input v-model="user.username" v-bind:placeholder="username_info"></Input>
                    <div class="space"></div>
                    <Input v-model="user.password" v-bind:placeholder="password_info"></Input>
                </div>
                <div class="button">
                    <MenuItem name="4">
                        <Button @click="handleButton" type="primary">确认</Button>
                        <Modal
                                v-model="show"
                                title="确定您的用户名"
                                @on-ok="ok"
                                @on-cancel="cancel">
                            <h2>{{user.username}}</h2>
                        </Modal>
                    </MenuItem>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sign",
        data() {
            return {
                user: {
                    username: '',
                    password: '',
                },
                username_info: '用户名',
                password_info: '密码',
                show: false,
            }
        },
        props: ['books'],
        methods: {
            handleButton() {
                if (this.user.username === '')
                    this.username_info = '请输入用户名！';
                if (this.user.password === '')
                    this.password_info = '请输入密码！';
                this.show = (this.user.username !== '') && (this.user.password !== '');
            },
            ok() {
                this.$Message.info('注册成功');
                this.$router.replace({path: '/Home'});
                location.reload();
            },
            cancel() {
                this.$Message.info('注册取消');
            }
        }
    }
</script>

<style scoped>
    .Sign {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
        background: url('../assets/region.jpg') center center no-repeat;
        background-size: cover;
    }

    .Region {
        margin: 150px 150px 250px 1050px;
    }

    .title {
        text-align: center;
        font-size: 20px;
    }

    .input {
        margin: 1px 20px 30px 20px;
    }

    .space {
        height: 10px;
    }

    .button {
        text-align: center;
    }

    h2 {
        text-align: left;
        text-indent: 2em;
    }
</style>
