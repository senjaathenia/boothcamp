// Inisialisasi state awal dengan properti count yang diset ke 0
const initialState = {
  count: 0
};

// Fungsi reducer untuk mengelola perubahan state berdasarkan jenis aksi
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // Kasus untuk aksi "INCREMENT"
    case "INCREMENT":
      return {
        // Salin semua properti dari state lama
        ...state,
        // Tambah nilai count dengan 1
        count: state.count + 1
      };
    
    // Kasus untuk aksi "DECREMENT"
    case "DECREMENT":
      return {
        // Salin semua properti dari state lama
        ...state,
        // Kurangi nilai count dengan 1
        count: state.count - 1
      };
    
    // Kasus default jika aksi tidak cocok dengan kasus manapun
    default:
      // Kembalikan state lama tanpa perubahan
      return state;
  }
};

// Ekspor fungsi rootReducer sebagai default dari modul ini
export default Reducer;
