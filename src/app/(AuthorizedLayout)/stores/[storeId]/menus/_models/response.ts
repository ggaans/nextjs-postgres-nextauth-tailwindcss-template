/**
 * 판매자 관리 - 매장 목록 - 매장의 메뉴 상세 정보 응답 DTO.
 *
 * @property index       메뉴 고유번호
 * @property createdDate 등록일
 * @property imagePath   이미지 경로
 * @property name        메뉴명
 * @property price       가격
 */
interface StoreMenuDetailResponse {
  index: number,
  createdDate: Date,
  imagePath: string,
  name: string,
  price: number,
}
