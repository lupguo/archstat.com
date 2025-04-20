import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// 生成时间戳字符串（示例格式：20231005_153045）
function getTimestamp() {
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // 月份补零
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}${month}${day}_${hours}${minutes}${seconds}`
}

// 获取固定时间戳（整个构建过程使用同一时间戳）
const timestamp = getTimestamp()

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                // 入口文件（如 main.js）
                entryFileNames: `js/[name]-${timestamp}-[hash:8].js`,

                // 代码分割后的 chunk 文件
                chunkFileNames: `js/[name]-${timestamp}-[hash:8].js`,

                // 静态资源文件（可选）
                assetFileNames: `assets/[name]-${timestamp}-[hash:8][extname]`
            }
        }
    }
})
