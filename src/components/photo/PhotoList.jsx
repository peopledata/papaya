import "./PhotoList.scss";

const PhotoList = ({ photos }) => {
  return (
    <div className="photo-list">
      <div className="photo-header">
        <h1>我的图片</h1>
      </div>
      <div className="photo-container">
        {photos.map((photo) => {
          return (
            <div className="photo-item" key={photo.id}>
              <img src={photo.url} alt={photo.name} />
              <p className="photo-title">{photo.name}</p>
              <div className="photo-tags">
                {photo.tags.map((tag) => {
                  return <span key={tag}>{tag}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoList;
