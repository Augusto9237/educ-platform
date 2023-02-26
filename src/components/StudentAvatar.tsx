interface AvatarProps {
    width: string;
    height: string;
}
export function StudentAvatar({ width, height }: AvatarProps) {
    const containerStyle = {
        maxHeight: height ? height : 'none',
        maxWidth: width ? width : 'none',
    };

    return (

        <div style={containerStyle} className="h-full h-full rounded-full object-contain overflow-hidden">
            <img className="w-full h-full" src="https://static.vecteezy.com/ti/vetor-gratis/p1/5620880-livro-de-design-moderno-de-aluno-icone-avatar-segurando-vetor.jpg" alt="" />
        </div>

    )
}