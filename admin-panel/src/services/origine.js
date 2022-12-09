import axios from "axios";

class OriginService {
  async getOrigin() {
    const genre = await axios.get(
      `${process.env.REACT_APP_API_URL}api/post/origine`
    );
    return genre.data;
  }
}
export const originService = new OriginService();
