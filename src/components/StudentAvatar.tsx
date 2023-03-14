interface AvatarProps {
    width: string;
    height: string;
    url: string | null | undefined;
}
export function StudentAvatar({ width, height, url }: AvatarProps) {
    const containerStyle = {
        maxHeight: height ? height : 'none',
        maxWidth: width ? width : 'none',
    };

    return (

        <div style={containerStyle} className="h-full rounded-full object-contain overflow-hidden border-2 border-solid border-buttonColor-500">
            <img className="w-full h-full" src={url!} alt="perfil" />
        </div>

    )
}