# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.


def compute(strand1, strand2):
    # we should probably make sure we're working with strings
    if not isinstance(strand1, str) or not isinstance(strand2, str):
        raise TypeError('Both DNA strands must be strings.')
    # make sure strands are same length
    if len(strand1) != len(strand2):
        raise ValueError('DNA strands must be of equal length.')
    # normalizing the strings takes some extra processing power,
    # but might be necessary depending on context
    strand1Normalized = strand1.upper()
    strand2Normalized = strand2.upper()
    count = 0
    for nucleotide1, nucleotide2 in zip(strand1Normalized, strand2Normalized):
        # we should probably throw when encountering an invalid letter
        if not isNucleotide(nucleotide1) or not isNucleotide(nucleotide2):
            raise ValueError('Both DNA strands must only contain valid nucleotide letters (A, C, G, or T).')
        if nucleotide1 != nucleotide2:
            count += 1
    return count


def isNucleotide(letter):
    if not isinstance(letter, str):
        raise TypeError('A nucleotide must be expressed as a string.')
    if len(letter) != 1:
        raise ValueError('A nucleotide must be one character long.')
    return letter == 'A' or letter == 'C' or letter == 'G' or letter == 'T'
