export interface UsersResponse {
    ok:      boolean;
    total:   number;
    usuario: Usuario[];
}

export interface Usuario {
    id:        number;
    nombre:    string;
    email:     string;
    estado:    boolean;
    createdAt: Date;
    updatedAt: Date;
}
