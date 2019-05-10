<template>
  <header>
    <div class="header-left">
    </div>
    <div class="header-input">
      <i class="iconfont search-icon">&#xe60b;</i>
      <input type="text" name="sreach" id="sreach-input" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="header-right">
      <span class="city">上海</span>
      <div class="delta"></div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
$bgColor:#00bcd4;
header{
  height: 80px;
  width: 750px;
  background: $bgColor;
  display: flex;
  align-items: center;
  .header-left{
    width: 52px;
    height: 100%;
    position: relative;
    margin-left: 16px;
    &::after{
      width: 28px;
      height: 3px;
      background: #fff;
      content: "";
      position: absolute;
      transform: rotate(-45deg);
      transform-origin: left center;
      top: 50%;
      left: 50%;
    }
    &::before{
      width: 28px;
      height: 3px;
      background: #fff;
      content: "";
      position: absolute;
      transform: rotate(45deg);
      transform-origin: left center;
      top: 50%;
      left: 50%;
    }
  }
  .header-input{
    margin-left:20px;
    width: 482px;
    height: 64px;
    border-radius: calc(1em / 1.2);
    background: #fff;
    padding-left: 50px;
    position: relative;
    padding-right: 10px;
    #sreach-input{
      width: 100%;
      border-top-right-radius: calc(1em / 1.2);
      border-bottom-right-radius: calc(1em / 1.2);
      height: 100%;
      outline: none;
      font-size: 30px;
    }
    .search-icon{
      position: absolute;
      width: 40px;
      left: 7px;
      font-size: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .header-right{
    color: #fff;
    display: flex;
    align-items: center;
    .city{
      font-size: 30px;
      padding: 10px;
    }
    .delta{
      width: 0;
      height: 0;
      font-size: 0;
      border-width: 12px;
      border-color: #fff transparent transparent;
      border-style: solid;
      transform: translateY(34%);
    }
  }
}
</style>
