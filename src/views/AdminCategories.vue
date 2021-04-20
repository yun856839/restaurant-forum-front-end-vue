<template>
  <div class="container py-5">
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            @click.prevent.stop="createCategory"
            type="button"
            class="btn btn-primary"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              class="form-control"
              type="text"
            />
            <span
              v-show="category.isEditing"
              @click.prevent.stop="handleCancel(category.id)"
              class="cancel"
            >
              Ｘ
            </span>
          </td>

          <td class="d-flex justify-content-between">
            <button
              @click.prevent.stop="toggleIsEditing(category.id)"
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
            >
              Edit
            </button>

            <button
              v-show="category.isEditing"
              @click.prevent.stop="
                updatedCategory({
                  categoryId: category.id,
                  name: category.name,
                })
              "
              type="button"
              class="btn btn-link mr-2"
            >
              Save
            </button>

            <button
              @click.prevent.stop="deleteCategory(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import AdminNav from "../components/AdminNav";

const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
    {
      id: 11,
      name: "日本料理",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
    {
      id: 21,
      name: "義大利料理",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
    {
      id: 31,
      name: "墨西哥料理",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
    {
      id: 41,
      name: "素食料理",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
    {
      id: 51,
      name: "美式料理",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
    {
      id: 61,
      name: "複合式料理",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
  ],
};

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories.map((category) => ({
        ...category,
        isEditing: false,
        nameCached: "",
      }));
    },
    createCategory() {
      // TODO: 透過 API 向後端伺服器'新增'類別

      this.categories.push({
        id: uuidv4(),
        name: this.newCategoryName,
      });
      this.newCategoryName = "";
    },
    deleteCategory(categoryId) {
      // TODO: 透過 API 向後端伺服器'刪除'類別

      this.categories = this.categories.filter(
        (category) => category.id !== categoryId
      );
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    updatedCategory({ categoryId, name }) {
      // TODO: 透過 API 向後端伺服器'更新'類別

      this.toggleIsEditing(categoryId);
      console.log("updatedCategory Name", name);
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>