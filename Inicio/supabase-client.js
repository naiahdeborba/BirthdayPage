// =====================================================
// CONEXÃO E OPERAÇÕES COM O BANCO DE DADOS (SUPABASE)
// =====================================================

const SUPABASE_URL = "https://txqzzddntqadixazhkob.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cXp6ZGRudHFhZGl4YXpoa29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4MzYxODQsImV4cCI6MjEwNzQxMjE4NH0.NUzRCAQ1DDFSHqeURQPUNIxCAqRi8eOeWpOu52gKXWE";

// Headers padrão para chamadas REST caso o SDK não esteja disponível
const SUPABASE_HEADERS = {
    "apikey": SUPABASE_ANON_KEY,
    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json"
};

// Inicializa o cliente oficial do Supabase caso a biblioteca JS esteja carregada
let supabaseClient = null;
try {
    if (window.supabase && typeof window.supabase.createClient === "function") {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch (e) {
    console.warn("Aviso ao carregar cliente Supabase:", e);
}

// ----------------------------------------------------
// 1. MURAL DE RECADOS
// ----------------------------------------------------
async function dbSalvarRecado(nome, recado) {
    try {
        if (supabaseClient) {
            const { data, error } = await supabaseClient
                .from('recados')
                .insert([{ nome, recado }])
                .select();
            if (error) throw error;
            return data;
        }
        const res = await fetch(`${SUPABASE_URL}/rest/v1/recados`, {
            method: 'POST',
            headers: { ...SUPABASE_HEADERS, "Prefer": "return=representation" },
            body: JSON.stringify({ nome, recado })
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.json();
    } catch (err) {
        console.error("Erro ao salvar recado no banco:", err);
        throw err;
    }
}

async function dbCarregarRecados() {
    try {
        if (supabaseClient) {
            const { data, error } = await supabaseClient
                .from('recados')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            return data || [];
        }
        const res = await fetch(`${SUPABASE_URL}/rest/v1/recados?select=*&order=created_at.desc`, {
            headers: SUPABASE_HEADERS
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.json();
    } catch (err) {
        console.error("Erro ao buscar recados do banco:", err);
        return [];
    }
}

// ----------------------------------------------------
// 2. RANKING: QUIZ "QUAL ERA A MINHA IDADE?" (FOTOS)
// ----------------------------------------------------
async function dbSalvarRankingFotos(nome, pontos) {
    try {
        if (supabaseClient) {
            const { data, error } = await supabaseClient
                .from('ranking_fotos')
                .insert([{ nome, pontos }])
                .select();
            if (error) throw error;
            return data;
        }
        const res = await fetch(`${SUPABASE_URL}/rest/v1/ranking_fotos`, {
            method: 'POST',
            headers: { ...SUPABASE_HEADERS, "Prefer": "return=representation" },
            body: JSON.stringify({ nome, pontos })
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.json();
    } catch (err) {
        console.error("Erro ao salvar ranking de fotos:", err);
        throw err;
    }
}

async function dbCarregarRankingFotos() {
    try {
        if (supabaseClient) {
            const { data, error } = await supabaseClient
                .from('ranking_fotos')
                .select('*')
                .order('pontos', { ascending: false })
                .order('created_at', { ascending: true })
                .limit(20);
            if (error) throw error;
            return data || [];
        }
        const res = await fetch(`${SUPABASE_URL}/rest/v1/ranking_fotos?select=*&order=pontos.desc,created_at.asc&limit=20`, {
            headers: SUPABASE_HEADERS
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.json();
    } catch (err) {
        console.error("Erro ao carregar ranking de fotos:", err);
        return [];
    }
}

// ----------------------------------------------------
// 3. RANKING: QUIZ "CURIOSIDADES SOBRE MIM"
// ----------------------------------------------------
async function dbSalvarRankingCuriosidades(nome, pontos) {
    try {
        if (supabaseClient) {
            const { data, error } = await supabaseClient
                .from('ranking_curiosidades')
                .insert([{ nome, pontos }])
                .select();
            if (error) throw error;
            return data;
        }
        const res = await fetch(`${SUPABASE_URL}/rest/v1/ranking_curiosidades`, {
            method: 'POST',
            headers: { ...SUPABASE_HEADERS, "Prefer": "return=representation" },
            body: JSON.stringify({ nome, pontos })
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.json();
    } catch (err) {
        console.error("Erro ao salvar ranking de curiosidades:", err);
        throw err;
    }
}

async function dbCarregarRankingCuriosidades() {
    try {
        if (supabaseClient) {
            const { data, error } = await supabaseClient
                .from('ranking_curiosidades')
                .select('*')
                .order('pontos', { ascending: false })
                .order('created_at', { ascending: true })
                .limit(20);
            if (error) throw error;
            return data || [];
        }
        const res = await fetch(`${SUPABASE_URL}/rest/v1/ranking_curiosidades?select=*&order=pontos.desc,created_at.asc&limit=20`, {
            headers: SUPABASE_HEADERS
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.json();
    } catch (err) {
        console.error("Erro ao carregar ranking de curiosidades:", err);
        return [];
    }
}

