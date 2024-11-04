import "/src/assets/main.css?t=1730676401469"

import { createApp } from "/node_modules/.vite/deps/vue.js?v=25982ac3"
import App from "/src/App.vue"
import router from "/src/router/index.js?t=1730677266901"

const app = createApp(App)

router.beforeEach((to, from, next) => {
  const title = to.meta.title || 'app'
  document.title = title
  next()
})

app.use(router)

app.mount('#app')

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiL3NyYy9hc3NldHMvbWFpbi5jc3M/dD0xNzMwNjc2NDAxNDY5XCJcblxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSBcIi9ub2RlX21vZHVsZXMvLnZpdGUvZGVwcy92dWUuanM/dj0yNTk4MmFjM1wiXG5pbXBvcnQgQXBwIGZyb20gXCIvc3JjL0FwcC52dWVcIlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiL3NyYy9yb3V0ZXIvaW5kZXguanM/dD0xNzMwNjc3MjY2OTAxXCJcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcClcblxucm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gdG8ubWV0YS50aXRsZSB8fCAnYXBwJ1xuICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIG5leHQoKVxufSlcblxuYXBwLnVzZShyb3V0ZXIpXG5cbmFwcC5tb3VudCgnI2FwcCcpXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUM3QztBQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDekQ7QUFDQSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzFCO0FBQ0EsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNSLENBQUMsQ0FBQztBQUNGO0FBQ0EsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDZjtBQUNBLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOyJ9