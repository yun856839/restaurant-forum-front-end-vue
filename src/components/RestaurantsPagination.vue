<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 prevPage -->
      <li
        :class="['page-item', { disabled: currentPage === 1 }]"
        v-show="prevPage"
      >
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{ name: 'restaurants', query: { page: prevPage, categoryId } }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <li
        :class="['page-item', { active: currentPage === page }]"
        v-for="page in totalPage"
        :key="page"
      >
        <router-link
          class="page-link"
          :to="{ name: 'restaurants', query: { page, categoryId } }"
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li
        :class="['page-item', { disabled: currentPage === totalPage.length }]"
        v-show="nextPage"
      >
        <router-link
          class="page-link"
          aria-label="Next"
          :to="{ name: 'restaurants', query: { page: nextPage, categoryId } }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "RestaurantsPagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Array,
      required: true,
    },
    prevPage: {
      type: Number,
      required: true,
    },
    nextPage: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: [Number, String],
      default: "",
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-link {
  height: 37px;
  padding: 7px 20px;
  color: #bd2333;
}

.page-item.active .page-link,
.page-item.active span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
  z-index: 1;
}

.page-item span {
  color: #bd2333;
}

a.page-link:hover,
a.page-link:hover span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
}
</style>