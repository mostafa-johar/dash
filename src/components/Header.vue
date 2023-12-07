<template>
    <header>
        <form class="form">
            <label for="keyword">
                <input type="search" id="keyword" placeholder="Type...">
            </label>
        </form>
        <div class="avatar">
            <i class="fa-regular fa-bell fa-lg"></i>
            <img src="../assets/imgs/Avatar.png" alt="Avater">
        </div>
    </header>
</template>
<style lang="scss" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:var(--mainPadding) calc(var(--mainPadding) - 5px) ;
    background-color: var(--white);
   label{
    position: relative;
    input{
        padding: 10px 0 10px 25px;
        width: 165px;
        border-radius: var(--borderRaduis);
        border: 1px solid var(--graylight);
        @media (max-width: 767px) {
            width: 150px;
        }
    }
    &::before{
        content: "\f002";
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 14px;
        color: var(--gray);
        }
   }

    img{
        width: 30px;
        height: 30px;
    }
    .avatar{
        display :flex;
        align-items: center;
        gap: 8px;
        i{
            position: relative;
            &::after{
                content: '';
                display: block;
                position: absolute;
                width: 10px;
                height: 10px;
                top: -15px;
                right: -5px;
                background-color: var(--red);
                border-radius: 50%;
            }
        }
    }
}
</style>