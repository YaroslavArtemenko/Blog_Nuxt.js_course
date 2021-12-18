<template>
  <PostsList :admin=true :posts="posts"></PostsList>
</template>

<script>

export default {
  name: 'IndexAdminPage',
  layout: 'admin',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg'
        }
      ]
    }
  }
}
</script>
