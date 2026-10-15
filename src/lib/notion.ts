import { Client } from '@notionhq/client';

export interface NotionTag {
  id: string;
  name: string;
  color?: string;
}

export interface NotionPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  cover: string;
  tags: NotionTag[];
  status: 'Published' | 'Draft';
  author?: string;
  readTime?: string;
}

export interface NotionRichText {
  type: string;
  text?: {
    content: string;
    link: { url: string } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href?: string | null;
}

export interface NotionBlock {
  id: string;
  type: string;
  [key: string]: any;
}

// Helper: Ubah teks menjadi slug URL-friendly
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Ganti spasi dengan tanda hubung -
    .replace(/[^\w\-]+/g, '') // Hapus semua karakter non-word kecuali tanda hubung
    .replace(/\-\-+/g, '-') // Ganti multiple tanda hubung menjadi satu
    .replace(/^-+/, '') // Hapus tanda hubung di awal
    .replace(/-+$/, ''); // Hapus tanda hubung di akhir
}

// Inisialisasi Notion Client
const token = import.meta.env.NOTION_TOKEN || process.env.NOTION_TOKEN;
const databaseId = import.meta.env.NOTION_DATABASE_ID || process.env.NOTION_DATABASE_ID;

const notion = token ? new Client({ auth: token }) : null;

// Mock Data Berkualitas Tinggi untuk fallback sebelum setup Notion / offline development
const MOCK_POSTS: NotionPost[] = [
  {
    id: 'mock-1',
    title: 'Panduan Lengkap MPASI 6 Bulan Pertama: Tekstur, Porsi, & Jadwal',
    slug: 'panduan-lengkap-mpasi-6-bulan-pertama',
    date: '2026-10-01',
    excerpt: 'Memasuki usia 6 bulan, si kecil siap untuk petualangan rasa pertamanya! Simak panduan tekstur bubur saring, takaran porsi, dan tips anti stres untuk Mama.',
    cover: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { id: 't1', name: 'Panduan MPASI sesuai usia', color: 'blue' },
      { id: 't2', name: 'MPASI Sehat & Tumbuh Kembang Bayi', color: 'green' }
    ],
    status: 'Published',
    author: 'Tim Ahli Nutrisi NutriMPASI',
    readTime: '4 menit baca'
  },
  {
    id: 'mock-2',
    title: '5 Tips Ampuh Hadapi GTM (Gerakan Tutup Mulut) Tanpa Emosi',
    slug: '5-tips-ampuh-hadapi-gtm-tanpa-emosi',
    date: '2026-10-04',
    excerpt: 'Si kecil tiba-tiba mogok makan dan buang muka? Jangan panik Ma! Ketahui penyebab GTM dan cara solutif menciptakan feeding rules yang menyenangkan.',
    cover: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { id: 't3', name: 'Tips menghadapi GTM (Gerakan Tutup Mulut)', color: 'orange' },
      { id: 't4', name: 'Nutrisi dan kebutuhan bayi', color: 'yellow' }
    ],
    status: 'Published',
    author: 'dr. Pratiwi, Sp.A',
    readTime: '5 menit baca'
  },
  {
    id: 'mock-3',
    title: 'Ide Menu MPASI 4 Bintang: Puree Daging Sapi & Labu Kuning Bernutrisi',
    slug: 'ide-menu-mpasi-puree-daging-sapi-labu-kuning',
    date: '2026-10-08',
    excerpt: 'Kombinasi zat besi hewani tinggi dan serat lembut labu kuning yang kaya beta-karoten, cocok untuk menaikkan berat badan (BB booster) si kecil.',
    cover: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { id: 't5', name: 'Ide menu MPASI', color: 'purple' },
      { id: 't6', name: 'Resep MPASI praktis', color: 'pink' }
    ],
    status: 'Published',
    author: 'Chef Bunda Maya',
    readTime: '3 menit baca'
  },
  {
    id: 'mock-4',
    title: 'Cara Tepat Menyimpan & Menghangatkan Kaldu MPASI Bebas Bakteri',
    slug: 'cara-tepat-menyimpan-menghangatkan-kaldu-mpasi',
    date: '2026-10-10',
    excerpt: 'Batch cooking kaldu MPASI menghemat waktu Mama di pagi hari. Pelajari aturan freezer, chiller, dan wadah food grade yang aman untuk bayi.',
    cover: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { id: 't7', name: 'Tips menyimpan dan menyiapkan MPASI', color: 'red' },
      { id: 't8', name: 'Tips memilih bahan makanan', color: 'gray' }
    ],
    status: 'Published',
    author: 'Tim Edukasi Gizi',
    readTime: '4 menit baca'
  }
];

const MOCK_BLOCKS: Record<string, NotionBlock[]> = {
  'panduan-lengkap-mpasi-6-bulan-pertama': [
    {
      id: 'b1',
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: { content: 'Momen menginjak usia 6 bulan adalah tonggak sejarah penting bagi si kecil dan orang tua. Pada fase ini, ASI saja sudah tidak lagi mencukupi 100% kebutuhan kalori, zat besi, dan mikronutrien harian bayi. Oleh karena itu, ', link: null },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Momen menginjak usia 6 bulan adalah tonggak sejarah penting bagi si kecil dan orang tua. Pada fase ini, ASI saja sudah tidak lagi mencukupi 100% kebutuhan kalori, zat besi, dan mikronutrien harian bayi. Oleh karena itu, '
          },
          {
            type: 'text',
            text: { content: 'Makanan Pendamping ASI (MPASI)', link: null },
            annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Makanan Pendamping ASI (MPASI)'
          },
          {
            type: 'text',
            text: { content: ' harus segera dimulai secara tepat waktu dan adekuat.', link: null },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: ' harus segera dimulai secara tepat waktu dan adekuat.'
          }
        ]
      }
    },
    {
      id: 'b2',
      type: 'heading_2',
      heading_2: {
        rich_text: [
          {
            type: 'text',
            text: { content: 'Tanda Bayi Sudah Siap MPASI', link: null },
            annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Tanda Bayi Sudah Siap MPASI'
          }
        ]
      }
    },
    {
      id: 'b3',
      type: 'bulleted_list_item',
      bulleted_list_item: {
        rich_text: [
          {
            type: 'text',
            text: { content: 'Leher sudah kokoh dan mampu menopang kepala dengan stabil saat duduk.', link: null },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Leher sudah kokoh dan mampu menopang kepala dengan stabil saat duduk.'
          }
        ]
      }
    },
    {
      id: 'b4',
      type: 'bulleted_list_item',
      bulleted_list_item: {
        rich_text: [
          {
            type: 'text',
            text: { content: 'Refleks menjulurkan lidah (extrusion reflex) sudah berkurang secara signifikan.', link: null },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Refleks menjulurkan lidah (extrusion reflex) sudah berkurang secara signifikan.'
          }
        ]
      }
    },
    {
      id: 'b5',
      type: 'bulleted_list_item',
      bulleted_list_item: {
        rich_text: [
          {
            type: 'text',
            text: { content: 'Menunjukkan ketertarikan saat melihat orang dewasa makan (membuka mulut atau berusaha meraih makanan).', link: null },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Menunjukkan ketertarikan saat melihat orang dewasa makan (membuka mulut atau berusaha meraih makanan).'
          }
        ]
      }
    },
    {
      id: 'b6',
      type: 'callout',
      callout: {
        icon: { type: 'emoji', emoji: '💡' },
        rich_text: [
          {
            type: 'text',
            text: { content: 'Penting diingat: Menu MPASI awal harus mengandung zat besi tinggi (seperti hati ayam, daging sapi, atau telur) dan tidak boleh hanya berupa puree buah atau sayur semata.', link: null },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Penting diingat: Menu MPASI awal harus mengandung zat besi tinggi (seperti hati ayam, daging sapi, atau telur) dan tidak boleh hanya berupa puree buah atau sayur semata.'
          }
        ]
      }
    },
    {
      id: 'b7',
      type: 'heading_2',
      heading_2: {
        rich_text: [
          {
            type: 'text',
            text: { content: 'Aturan Tekstur & Porsi Sesuai Rekomendasi IDAI', link: null },
            annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Aturan Tekstur & Porsi Sesuai Rekomendasi IDAI'
          }
        ]
      }
    },
    {
      id: 'b8',
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: { content: 'Untuk usia 6 bulan, tekstur dimulai dengan bubur kental yang disaring halus (puree). Pastikan bubur tidak terlalu encer — jika sendok dimiringkan, bubur jatuh secara perlahan dan tidak menetes seperti air. Porsi awal dimulai dari 2-3 sendok makan dewasa per sesi makan, dengan frekuensi 2 kali sehari.', link: null },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: 'Untuk usia 6 bulan, tekstur dimulai dengan bubur kental yang disaring halus (puree). Pastikan bubur tidak terlalu encer — jika sendok dimiringkan, bubur jatuh secara perlahan dan tidak menetes seperti air. Porsi awal dimulai dari 2-3 sendok makan dewasa per sesi makan, dengan frekuensi 2 kali sehari.'
          }
        ]
      }
    },
    {
      id: 'b9',
      type: 'quote',
      quote: {
        rich_text: [
          {
            type: 'text',
            text: { content: '"MPASI bukan sekadar mengisi perut, melainkan sarana edukasi sensory, motorik orofasial, dan bonding kasih sayang antara orang tua dan anak."', link: null },
            annotations: { bold: false, italic: true, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: '"MPASI bukan sekadar mengisi perut, melainkan sarana edukasi sensory, motorik orofasial, dan bonding kasih sayang antara orang tua dan anak."'
          }
        ]
      }
    }
  ]
};

// Helper: Cari property Notion secara case-insensitive
function findProp(props: Record<string, any>, names: string[]): any {
  if (!props) return null;
  const lowerNames = names.map((n) => n.toLowerCase());
  for (const [key, value] of Object.entries(props)) {
    if (lowerNames.includes(key.toLowerCase())) {
      return value;
    }
  }
  return null;
}

// Helper: Cari property Notion berdasarkan tipenya
function findPropByType(props: Record<string, any>, type: string): any {
  if (!props) return null;
  for (const value of Object.values(props)) {
    if (value && (value as any).type === type) {
      return value;
    }
  }
  return null;
}

let cachedDbSchema: any = null;

async function getDatabaseSchema() {
  if (!notion || !databaseId) return null;
  if (cachedDbSchema) return cachedDbSchema;
  try {
    cachedDbSchema = await notion.databases.retrieve({ database_id: databaseId });
    return cachedDbSchema;
  } catch (err) {
    console.warn('⚠️ Gagal mengambil schema database Notion:', err);
    return null;
  }
}

// Ambil seluruh daftar postingan blog yang berstatus Published
export async function getDatabase(): Promise<NotionPost[]> {
  if (!notion || !databaseId || databaseId.includes('your_32_character')) {
    // Kembalikan Mock data jika Notion API belum diset
    return MOCK_POSTS;
  }

  try {
    const schema = await getDatabaseSchema();
    const queryParams: any = {
      database_id: databaseId,
    };

    if (schema?.properties) {
      const propKeys = Object.keys(schema.properties);
      
      // Deteksi property status (bisa 'status' atau 'Status', bertipe select atau status)
      const statusKey = propKeys.find((k) => k.toLowerCase() === 'status');
      if (statusKey) {
        const propType = schema.properties[statusKey].type;
        if (propType === 'select') {
          queryParams.filter = {
            property: statusKey,
            select: { equals: 'Published' },
          };
        } else if (propType === 'status') {
          queryParams.filter = {
            property: statusKey,
            status: { equals: 'Published' },
          };
        }
      }

      // Deteksi property date untuk sorting
      const dateKey = propKeys.find(
        (k) => k.toLowerCase() === 'date' || schema.properties[k]?.type === 'date'
      );
      if (dateKey) {
        queryParams.sorts = [
          {
            property: dateKey,
            direction: 'descending',
          },
        ];
      }
    }

    const response = await notion.databases.query(queryParams);

    const posts: NotionPost[] = (response.results
      .map((page: any): NotionPost | null => {
        const props = page.properties;

        // Ambil Title (cari berdasarkan tipe 'title' atau nama 'title'/'judul')
        const titleObj = findPropByType(props, 'title') || findProp(props, ['title', 'judul', 'name']);
        const titleProp = titleObj?.title || [];
        const title = titleProp.map((t: any) => t.plain_text).join('').trim();

        // Abaikan row kosong jika tidak ada judul sama sekali
        if (!title) {
          return null;
        }

        // Ambil Slug (jika kosong, fallback ke slugify title)
        const slugObj = findProp(props, ['slug', 'url']);
        const slugProp = slugObj?.rich_text || [];
        const rawSlug = slugProp.map((t: any) => t.plain_text).join('').trim();
        const slug = rawSlug ? slugify(rawSlug) : slugify(title);

        // Ambil Tanggal
        const dateObj = findPropByType(props, 'date') || findProp(props, ['date', 'tanggal']);
        const date = dateObj?.date?.start || new Date().toISOString().split('T')[0];

        // Ambil Excerpt
        const excerptObj = findProp(props, ['excerpt', 'ringkasan', 'summary', 'deskripsi', 'description']);
        const excerptProp = excerptObj?.rich_text || [];
        const excerpt =
          excerptProp.map((t: any) => t.plain_text).join('').trim() ||
          'Pelajari informasi nutrisi dan tips MPASI terbaik untuk si kecil.';

        // Ambil Tags
        const tagsObj = findPropByType(props, 'multi_select') || findProp(props, ['tags', 'tag', 'kategori', 'category']);
        const tagsProp = tagsObj?.multi_select || [];
        const tags: NotionTag[] = tagsProp.map((tag: any) => ({
          id: tag.id,
          name: tag.name,
          color: tag.color,
        }));

        // Ambil Cover
        let cover = 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80';
        if (page.cover) {
          cover = page.cover.type === 'external' ? page.cover.external.url : page.cover.file.url;
        } else {
          const coverObj = findProp(props, ['cover', 'gambar', 'image']);
          if (coverObj?.files?.length > 0) {
            const fileObj = coverObj.files[0];
            cover = fileObj.type === 'external' ? fileObj.external.url : fileObj.file.url;
          }
        }

        // Ambil Author & ReadTime jika ada
        const authorObj = findProp(props, ['author', 'penulis']);
        const authorProp = authorObj?.rich_text || authorObj?.people || [];
        const author = authorProp.length > 0 
          ? (authorProp[0].plain_text || authorProp[0].name || 'Tim Ahli NutriMPASI') 
          : 'Tim Ahli NutriMPASI';

        const readTimeObj = findProp(props, ['readtime', 'read_time', 'waktu_baca']);
        const readTimeProp = readTimeObj?.rich_text || [];
        const readTime = readTimeProp.map((t: any) => t.plain_text).join('').trim() || '4 menit baca';

        return {
          id: page.id,
          title,
          slug,
          date,
          excerpt,
          cover,
          tags,
          status: 'Published',
          author,
          readTime,
        };
      })
      .filter((post): post is NotionPost => post !== null));

    return posts.length > 0 ? posts : MOCK_POSTS;
  } catch (error) {
    console.warn('⚠️ Gagal terhubung ke Notion API. Menggunakan data demo fallback:', error);
    return MOCK_POSTS;
  }
}

// Ambil postingan spesifik berdasarkan Slug
export async function getPostBySlug(slug: string): Promise<NotionPost | null> {
  const posts = await getDatabase();
  const matched = posts.find((p) => p.slug === slug);
  return matched || null;
}

// Ambil konten blok (blocks) dari suatu halaman Notion
export async function getPageBlocks(pageId: string, slug?: string): Promise<NotionBlock[]> {
  if (!notion || !databaseId || databaseId.includes('your_32_character') || pageId.startsWith('mock-')) {
    if (slug && MOCK_BLOCKS[slug]) {
      return MOCK_BLOCKS[slug];
    }
    // Default fallback blocks jika slug lain diakses dalam mock mode
    return [
      {
        id: 'fallback-p1',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: { content: 'Nutrisi yang optimal pada masa 1.000 Hari Pertama Kehidupan (HPK) adalah pondasi kecerdasan dan imunitas fisik bayi. Pemberian menu seimbang yang kaya akan protein hewani, zat besi, lemak sehat, serta vitamin esensial sangat dianjurkan oleh dokter spesialis anak.', link: null },
              annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
              plain_text: 'Nutrisi yang optimal pada masa 1.000 Hari Pertama Kehidupan (HPK) adalah pondasi kecerdasan dan imunitas fisik bayi. Pemberian menu seimbang yang kaya akan protein hewani, zat besi, lemak sehat, serta vitamin esensial sangat dianjurkan oleh dokter spesialis anak.'
            }
          ]
        }
      },
      {
        id: 'fallback-h2',
        type: 'heading_2',
        heading_2: {
          rich_text: [
            {
              type: 'text',
              text: { content: 'Tips Praktis Mempersiapkan Makanan Si Kecil', link: null },
              annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
              plain_text: 'Tips Praktis Mempersiapkan Makanan Si Kecil'
            }
          ]
        }
      },
      {
        id: 'fallback-p2',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: { content: 'Gunakan peralatan makan yang steril dan bebas BPA. Kenalkan aneka rasa alami dari bahan segar tanpa tambahan garam dan gula berlebih agar indera perasa si kecil berkembang secara optimal.', link: null },
              annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
              plain_text: 'Gunakan peralatan makan yang steril dan bebas BPA. Kenalkan aneka rasa alami dari bahan segar tanpa tambahan garam dan gula berlebih agar indera perasa si kecil berkembang secara optimal.'
            }
          ]
        }
      }
    ];
  }

  try {
    const blocks: NotionBlock[] = [];
    let cursor: string | undefined = undefined;

    while (true) {
      const response: any = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
        page_size: 100,
      });

      blocks.push(...response.results);

      if (!response.has_more) break;
      cursor = response.next_cursor;
    }

    return blocks;
  } catch (error) {
    console.error(`Gagal mengambil blok Notion untuk halaman ${pageId}:`, error);
    return [];
  }
}
