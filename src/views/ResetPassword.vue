<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Set New Password
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="new-password"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            New Password
          </label>
          <div class="mt-2">
            <input
              id="new-password"
              name="new-password"
              type="password"
              required=""
              placeholder="Enter new password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            for="repeat-password"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Repeat Password
          </label>
          <div class="mt-2">
            <input
              id="repeat-password"
              name="repeat-password"
              type="password"
              required=""
              placeholder="Repeat password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="mt-2">
          <router-link
            to="/login"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Go back to login
          </router-link>
        </div>

        <div class="login-container">
          <div class="flex items-center">
            <button
              type="submit"
              class="flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Set Password
            </button>
          </div>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Remembered your password?
        {{ " " }}
        <router-link
          to="/login"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign in
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetNewPassword",
};
</script>

<style scoped>
.login-container {
  text-align: center;
  padding: 20px;
}

.flex {
  display: flex;
}
</style>
