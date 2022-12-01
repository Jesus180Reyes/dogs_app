export interface UserResponse {
    usuario: Usuario;
}

export interface Usuario {
    id:        number | undefined;
    nombre:    string;
    email:     string;
    estado:    boolean;
    createdAt: Date;
    updatedAt: Date;
}
