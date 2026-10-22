//5.Crie um enum para representar níveis de acesso: ADMIN, USER, GUEST.

enum nivelAcesso {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
}

let nivel: nivelAcesso = nivelAcesso.ADMIN

console.log(nivel)