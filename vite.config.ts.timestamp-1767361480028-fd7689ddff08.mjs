// vite.config.ts
import { defineConfig } from "file:///C:/Users/dheiver.santos_a3dat/dheiver-ai-solutions/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/dheiver.santos_a3dat/dheiver-ai-solutions/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { sentryVitePlugin } from "file:///C:/Users/dheiver.santos_a3dat/dheiver-ai-solutions/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\dheiver.santos_a3dat\\dheiver-ai-solutions";
var vite_config_default = defineConfig(({ mode }) => {
  const isDevelopment = mode === "development";
  const isProduction = mode === "production";
  return {
    plugins: [
      react(),
      // Sentry source maps upload (only in production)
      isProduction && process.env.VITE_SENTRY_DSN && sentryVitePlugin({
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        telemetry: false
      })
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom", "react-router-dom"],
            "ui-vendor": [
              "@radix-ui/react-dialog",
              "@radix-ui/react-dropdown-menu",
              "@radix-ui/react-accordion",
              "@radix-ui/react-tabs"
            ],
            "form-vendor": ["react-hook-form", "@hookform/resolvers", "zod"],
            "query-vendor": ["@tanstack/react-query"],
            "motion-vendor": ["framer-motion"]
          }
        }
      },
      sourcemap: isProduction ? "hidden" : true,
      minify: isProduction ? "terser" : false,
      terserOptions: isProduction ? {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log", "console.debug"]
        },
        mangle: {
          safari10: true
        },
        format: {
          comments: false
        }
      } : void 0,
      chunkSizeWarningLimit: 1e3,
      reportCompressedSize: !isDevelopment
    },
    server: {
      port: 3e3,
      host: true,
      open: false,
      strictPort: false
    },
    preview: {
      port: 3e3,
      host: true,
      strictPort: false
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-router-dom",
        "@tanstack/react-query"
      ]
    },
    define: {
      __BUILD_TIME__: JSON.stringify((/* @__PURE__ */ new Date()).toISOString()),
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version || "1.0.0")
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkaGVpdmVyLnNhbnRvc19hM2RhdFxcXFxkaGVpdmVyLWFpLXNvbHV0aW9uc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZGhlaXZlci5zYW50b3NfYTNkYXRcXFxcZGhlaXZlci1haS1zb2x1dGlvbnNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2RoZWl2ZXIuc2FudG9zX2EzZGF0L2RoZWl2ZXItYWktc29sdXRpb25zL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgc2VudHJ5Vml0ZVBsdWdpbiB9IGZyb20gXCJAc2VudHJ5L3ZpdGUtcGx1Z2luXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgaXNEZXZlbG9wbWVudCA9IG1vZGUgPT09ICdkZXZlbG9wbWVudCc7XHJcbiAgY29uc3QgaXNQcm9kdWN0aW9uID0gbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICByZWFjdCgpLFxyXG4gICAgICAvLyBTZW50cnkgc291cmNlIG1hcHMgdXBsb2FkIChvbmx5IGluIHByb2R1Y3Rpb24pXHJcbiAgICAgIGlzUHJvZHVjdGlvbiAmJiBwcm9jZXNzLmVudi5WSVRFX1NFTlRSWV9EU04gJiYgc2VudHJ5Vml0ZVBsdWdpbih7XHJcbiAgICAgICAgb3JnOiBwcm9jZXNzLmVudi5TRU5UUllfT1JHLFxyXG4gICAgICAgIHByb2plY3Q6IHByb2Nlc3MuZW52LlNFTlRSWV9QUk9KRUNULFxyXG4gICAgICAgIGF1dGhUb2tlbjogcHJvY2Vzcy5lbnYuU0VOVFJZX0FVVEhfVE9LRU4sXHJcbiAgICAgICAgdGVsZW1ldHJ5OiBmYWxzZSxcclxuICAgICAgfSksXHJcbiAgICBdLmZpbHRlcihCb29sZWFuKSxcclxuICAgIFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICAgICdyZWFjdC12ZW5kb3InOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXHJcbiAgICAgICAgICAgICd1aS12ZW5kb3InOiBbXHJcbiAgICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1kaWFsb2cnLCBcclxuICAgICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnUnLFxyXG4gICAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uJyxcclxuICAgICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXRhYnMnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAnZm9ybS12ZW5kb3InOiBbJ3JlYWN0LWhvb2stZm9ybScsICdAaG9va2Zvcm0vcmVzb2x2ZXJzJywgJ3pvZCddLFxyXG4gICAgICAgICAgICAncXVlcnktdmVuZG9yJzogWydAdGFuc3RhY2svcmVhY3QtcXVlcnknXSxcclxuICAgICAgICAgICAgJ21vdGlvbi12ZW5kb3InOiBbJ2ZyYW1lci1tb3Rpb24nXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc291cmNlbWFwOiBpc1Byb2R1Y3Rpb24gPyAnaGlkZGVuJyA6IHRydWUsXHJcbiAgICAgIG1pbmlmeTogaXNQcm9kdWN0aW9uID8gJ3RlcnNlcicgOiBmYWxzZSxcclxuICAgICAgdGVyc2VyT3B0aW9uczogaXNQcm9kdWN0aW9uID8ge1xyXG4gICAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgcHVyZV9mdW5jczogWydjb25zb2xlLmxvZycsICdjb25zb2xlLmRlYnVnJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYW5nbGU6IHtcclxuICAgICAgICAgIHNhZmFyaTEwOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICBjb21tZW50czogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSA6IHVuZGVmaW5lZCxcclxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxyXG4gICAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogIWlzRGV2ZWxvcG1lbnQsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgcG9ydDogMzAwMCxcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgIHN0cmljdFBvcnQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcHJldmlldzoge1xyXG4gICAgICBwb3J0OiAzMDAwLFxyXG4gICAgICBob3N0OiB0cnVlLFxyXG4gICAgICBzdHJpY3RQb3J0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgJ3JlYWN0JyxcclxuICAgICAgICAncmVhY3QtZG9tJyxcclxuICAgICAgICAncmVhY3Qtcm91dGVyLWRvbScsXHJcbiAgICAgICAgJ0B0YW5zdGFjay9yZWFjdC1xdWVyeScsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgX19CVUlMRF9USU1FX186IEpTT04uc3RyaW5naWZ5KG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSksXHJcbiAgICAgIF9fQVBQX1ZFUlNJT05fXzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbiB8fCAnMS4wLjAnKSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1YsU0FBUyxvQkFBb0I7QUFDN1csT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHdCQUF3QjtBQUhqQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLGdCQUFnQixTQUFTO0FBQy9CLFFBQU0sZUFBZSxTQUFTO0FBRTlCLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBLE1BRU4sZ0JBQWdCLFFBQVEsSUFBSSxtQkFBbUIsaUJBQWlCO0FBQUEsUUFDOUQsS0FBSyxRQUFRLElBQUk7QUFBQSxRQUNqQixTQUFTLFFBQVEsSUFBSTtBQUFBLFFBQ3JCLFdBQVcsUUFBUSxJQUFJO0FBQUEsUUFDdkIsV0FBVztBQUFBLE1BQ2IsQ0FBQztBQUFBLElBQ0gsRUFBRSxPQUFPLE9BQU87QUFBQSxJQUVoQixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsSUFFQSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixjQUFjO0FBQUEsWUFDWixnQkFBZ0IsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUEsWUFDekQsYUFBYTtBQUFBLGNBQ1g7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxlQUFlLENBQUMsbUJBQW1CLHVCQUF1QixLQUFLO0FBQUEsWUFDL0QsZ0JBQWdCLENBQUMsdUJBQXVCO0FBQUEsWUFDeEMsaUJBQWlCLENBQUMsZUFBZTtBQUFBLFVBQ25DO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVcsZUFBZSxXQUFXO0FBQUEsTUFDckMsUUFBUSxlQUFlLFdBQVc7QUFBQSxNQUNsQyxlQUFlLGVBQWU7QUFBQSxRQUM1QixVQUFVO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxlQUFlO0FBQUEsVUFDZixZQUFZLENBQUMsZUFBZSxlQUFlO0FBQUEsUUFDN0M7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOLFVBQVU7QUFBQSxRQUNaO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTixVQUFVO0FBQUEsUUFDWjtBQUFBLE1BQ0YsSUFBSTtBQUFBLE1BQ0osdUJBQXVCO0FBQUEsTUFDdkIsc0JBQXNCLENBQUM7QUFBQSxJQUN6QjtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFFQSxjQUFjO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixnQkFBZ0IsS0FBSyxXQUFVLG9CQUFJLEtBQUssR0FBRSxZQUFZLENBQUM7QUFBQSxNQUN2RCxpQkFBaUIsS0FBSyxVQUFVLFFBQVEsSUFBSSx1QkFBdUIsT0FBTztBQUFBLElBQzVFO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
