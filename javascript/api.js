// API 基礎URL配置
const BASE_URL = '/api';

// API 請求處理
const API = {
    // 發布新貼文
    createPost: async (formData) => {
        try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || '發布失敗');
            }
            return data;
        } catch (error) {
            console.error('發布貼文錯誤:', error);
            throw error;
        }
    },

    // 獲取貼文列表
    getPosts: async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts`);
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || '獲取貼文失敗');
            }
            return data.posts;
        } catch (error) {
            console.error('獲取貼文錯誤:', error);
            throw error;
        }
    },

    // 點讚功能
    toggleLike: async (postId) => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${postId}/like`, {
                method: 'POST'
            });
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || '操作失敗');
            }
            return data;
        } catch (error) {
            console.error('點讚錯誤:', error);
            throw error;
        }
    },

    // 發表評論
    addComment: async (postId, content) => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content })
            });
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || '評論失敗');
            }
            return data;
        } catch (error) {
            console.error('評論錯誤:', error);
            throw error;
        }
    },

    // 獲取評論列表
    getComments: async (postId) => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || '獲取評論失敗');
            }
            return data.comments;
        } catch (error) {
            console.error('獲取評論錯誤:', error);
            throw error;
        }
    }
};

// 導出 API 對象
export default API; 