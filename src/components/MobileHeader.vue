<template>
  <header>
    <div class="head1">
      <div @click="$router.push('/')"><img src="/img/PNG Logo -1.png" /></div>
      <span @click="toggleMenu"><font-awesome-icon :icon="['fas', 'bars']" /></span>
    </div>
    <div class="head2" v-if="showMenu">
      <ul>
          <li >
            <RouterLink to="/masterclass" class="link" @click="toggleMenu">MASTERCLASS​</RouterLink>
          </li>
          <li>
            <RouterLink to="/calculator" class="link" @click="toggleMenu">CALCULATORS​</RouterLink>
          </li>
          <li ><RouterLink to="/myMentor" class="link" @click="toggleMenu">MY MENTOR</RouterLink></li>
          <li ><RouterLink to="/brand" class="link" @click="toggleMenu">BRAND</RouterLink></li>
        </ul>
        <div class="btn_box">
        <button class="butn">Log In</button>
        <button class="butn">JOIN COMMUNITY</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      showMenu: false,
    };
  },
    methods: {
        toggleMenu() {
        this.showMenu = !this.showMenu;
        },
    },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  list-style: none;
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
  z-index: 2;
}
.head1 {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  padding: 0 10%;
  cursor: pointer;
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
}
.head1 img {
  width: 90px;
  margin: 5% 0;
}
.head1 span {
  font-size: 300%;
  color: white;
  cursor: pointer;
  padding: 10px 0;
}
.head2 {
width: 70%;
margin: auto;
list-style: none;
box-shadow: 2px 2px 2px lightgray, -2px 2px 2px lightgray;
}
.head2 ul li {
  list-style: none;
  position: relative;
  margin: 10px 0;
  
}
.head2 ul li:hover
 {
  background-color: #123931;
  cursor: pointer;
  .link {
    color: white;
  }
}

.link {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 400;
  font-family: dm-sans;
}
.arrow{
position: absolute;
right: 20px;
}
.btn_box {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
}
.btn_box button {
  background-color: #FF8060;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
}
</style>
