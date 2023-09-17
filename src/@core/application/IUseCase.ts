export default interface IUseCase<I, O> {
  execute(input: I): O;
}
