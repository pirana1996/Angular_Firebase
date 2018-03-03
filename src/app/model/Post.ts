export class Post {
  id?: string;
  startPrice: number;
  currentBid: number;
  user: string;
  title: string;
  description : string;
  imageUrl: string;
  startDate: Date;
  endDateTime: Date;

  constructor (startPrice, currentBid, user, title, description, imageUrl, startDate, endDateTime) {
    this.startPrice = startPrice;
    this.currentBid = currentBid;
    this.user = user;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.startDate = startDate;
    this.endDateTime = endDateTime;
  }
}


