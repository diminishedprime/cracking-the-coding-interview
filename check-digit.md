# The final digit of a Universal Product Code is a check digit computed as follows:[2]

1. Add the digits in the odd-numbered positions (first, third, fifth, etc.)
   together and multiply by three.
2. Add the digits (up to but not including the check digit) in the even-numbered
   positions (second, fourth, sixth, etc.) to the result.
3. Take the remainder of the result divided by 10 (modulo operation) and if not
   0, subtract this from 10 to derive the check digit.

1. Add the odd number digits: 0+6+0+2+1+5 = 14.
2. Multiply the result by 3: 14 × 3 = 42.
3. Add the even number digits: 3+0+0+4+4 = 11.
4. Add the two results together: 42 + 11 = 53.
5. To calculate the check digit, take the remainder of (53 / 10), which is also
   known as (53 modulo 10), and if not 0, subtract from 10. Therefore, the check
   digit value is 7. i.e. (53 / 10) = 5 remainder 3; 10 - 3 = 7.

#+BEGIN_SRC clojure  (defn odd-entries
    [coll]
    (take-nth 2 coll))

  (defn even-entries
    [coll]
    (odd-entries (rest coll)))

  (defn odd-and-even-entries
    [coll]
    ((juxt odd-entries even-entries) coll))

  (defn character->number
    [character]
    (- (int character) 48))

  (defn sum-collection
    [collection]
    (reduce + collection))

  (defn handle-odd-digits
    [odd-digits]
    (as-> odd-digits $
      (sum-collection $)
      (* 3 $)))

  (defn handle-even-digits
    [even-digits]
    (as-> even-digits $
      (butlast $)
      (sum-collection $)))

  (defn handle-odd-and-even
    [[odds evens]]
    (let [odd-total (handle-odd-digits odds)
          even-total (handle-even-digits evens)
          ;; add the odd and even totals
          sum (+ odd-total even-total)
          ;; divide the sum by 10 and take the remainder
          mod-10 (mod sum 10)
          ;; If the mod-10ed value is 0, keep it, otherwise subtract it from 10
          calculated-check-digit (if (= mod-10 0)
                                   mod-10
                                   (- 10 mod-10))
          ;; The check-digit is the last digit of the evens
          check-digit (last evens)]
      ;; If the calculated check-digit is the same as the check-digit, then it's
      ;; valid. Otherwise, its not.
      (= check-digit calculated-check-digit)))

  (defn upc-check-digit
    [upc]
    (as-> upc $
      ;; Turn each character into a number
      (map character->number $)
      ;; group into [evens, odds]
      (odd-and-even-entries $)
      (handle-odd-and-even $))
    )

  (comment
    ;; Valid UPC
    (upc-check-digit "036000241457")
    ;; Invalid UPC
    (upc-check-digit "036000241453")
    )
#+END_SRC
