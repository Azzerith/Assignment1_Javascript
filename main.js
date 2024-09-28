function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    let idStudent
    if (programId === "ACC") {
        idStudent = `Akuntansi`
    } else if (programId === "HIN") {
        idStudent = `Hubungan Internasional`
    } else if (programId === "IAB") {
        idStudent = `Ilmu Administrasi Bisnis`
    } else if (programId === "IAP") {
        idStudent = `Ilmu Administrasi Publik`
    } else if (programId === "MJN") {
        idStudent = `Manajemen`
    } else if (programId === "TKM") {
        idStudent = `Teknik Kimia`
    }
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;