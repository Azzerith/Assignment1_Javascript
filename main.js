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

    if (gpa >= 3 && gpa <= 4) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak 24 SKS untuk semester depan.`
    } else if (gpa >= 2.5 && gpa <= 2.99) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${idStudent} dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.`
    } else if (gpa >= 2 && gpa <= 2.49) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${idStudent} dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.`
    } else if (gpa >= 1.5 && gpa <= 1.99) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${idStudent} dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.`
    } else if (gpa >= 0 && gpa <= 1.49) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${idStudent} dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.`
    } else {
        return `Invalid gpa number`
    }
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;